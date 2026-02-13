const { Zcl } = require('zigbee-herdsman');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const mExt = require('zigbee-herdsman-converters/lib/modernExtend');
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const e = exposes.presets;

const manufacturerCode = 0x1037;
const manufacturerOptions = { manufacturerCode: manufacturerCode, disableDefaultResponse: true };
const manufacturerClusterAttributes = {
    buttonMode: { ID: 0x0000, type: Zcl.DataType.ENUM8, write: true },
    preventReset: { ID: 0x0001, type: Zcl.DataType.BOOLEAN, write: true },
}
const deviceExtend = {
    ManuConfigurationCluster: () => {
        const extend = mExt.deviceAddCustomCluster("ManuConfiguration", {
            ID: 0xFC00,
            manufacturerCode: manufacturerCode,
            attributes: manufacturerClusterAttributes,
            commands: {},
            commandsResponse: {},
        });
        extend.configure.push(mExt.setupConfigureForReading("ManuConfiguration", ["buttonMode", "preventReset"]));
        extend.configure.push(mExt.setupConfigureForBinding("genPowerCfg", "input"));
        return extend;
    }
}
const operationModesLookup = {
    toggle: 0,
    momentary_on_off: 1,
    multistate: 2,
}

const multiStateActions = {
    toggle: 0,
    momentary_pressed: 1,
    momentary_released: 2,
    single_click: 3,
    double_click: 4,
    triple_click: 5,
    hold: 6,
    release: 7,
};

const definition = [
    {
        zigbeeModel: ["lumi.remote.b286acn02.diy"],
        model: "WXKG07LM",
        vendor: "Aqara",
        description: "Wireless remote switch D1 (double rocker)",
        fromZigbee: [fz.battery],
        toZigbee: [],
        exposes: [e.battery(), e.battery_voltage()],
        extend: [
            deviceExtend.ManuConfigurationCluster(),
            mExt.deviceEndpoints({
                endpoints: {
                    left: 2,
                    right: 3,
                }
            }),
            mExt.enumLookup({
                name: "operation_mode",
                lookup: operationModesLookup,
                cluster: "ManuConfiguration",
                attribute: "buttonMode",
                description: "Hold any button while changing this setting.",
                zigbeeCommandOptions: manufacturerOptions,
                access: "ALL",
                label: "Operation Mode",
            }),
            mExt.binary({
                name: "prevent_reset",
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                cluster: "ManuConfiguration",
                attribute: "preventReset",
                description: "Enable to avoid unintended resets and support HOLD functionality. Without it, long clicks will reset the device. Hold any button while changing this setting.",
                zigbeeCommandOptions: manufacturerOptions,
                access: "ALL",
                label: "Prevent Reset",
            }),
            mExt.actionEnumLookup({
                actionLookup: multiStateActions,
                cluster: "genMultistateInput",
                attribute: "presentValue",
                endpointNames: ["left", "right"],
                commands: ["attributeReport", "readResponse"],
            })
        ],
    }
]

module.exports = definition;
