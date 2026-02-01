- [Overview](#overview)
- [Features](#features)
- [How to Use](#how-to-use)
- [Screenshots](#screenshots)

# Overview
**[WXKG11LM](https://www.zigbee2mqtt.io/devices/WXKG11LM.html)** is a wireless mini switch that uses the JN5169 chip.</br>

> ⚠️ **Note:** After flashing custom firmware, the device will no longer be compatible with Aqara coordinators/hubs. It will only work with standard Zigbee coordinators like Zigbee2MQTT, ZHA, or deCONZ.

> ⚠️ **Note 2:** Battery voltage readings may not be very accurate.

### DIOs definition:
- LED - DIO 11
- Main button - DIO 16
- Secondary button - DIO 0

### Firmwares:
| Firmware | Note |
|----------|---------|
| 000001_20250426_WXKG11LM | Custom firmware with DEBUG disabled |
| 000001_20250426_WXKG11LM_debug | Custom firmware with DEBUG enabled |
| WXKG11LM_original | Original firmware |

### Converter:
[WXKG11LM_converter.js](WXKG11LM_converter.js)

### Board:
Version: XX
![Board Front](images/board_front.png)
![Board Back](images/board_back.png)

# Features
The custom firmware supports next features:
- **Pairing**</br>
  The device can join a Zigbee network using a standard pairing procedure. To enter pairing mode: press button and hold until the LED starts blinking rapidly **5 times**.

- **Binding & Groups**</br>
  Supports [binding](https://www.zigbee2mqtt.io/guide/usage/binding.html) to other devices and groups in `toggle` operation mode.

- **Prevent reset**</br>
    Supports configuration to prevent accidental device reset. This feature needs to be manually enabled.

- **Operation Modes**</br>
  You can choose from several modes depending on your use case:
  - **Multistate**</br>
    Reports click events using the MultiState Input cluster. Possible values are: `single_click`, `double_click`, `triple_click`, `hold`, `release`

  - **Action**</br>
    Sends `Toggle` Zigbee command to the binded device on button press.</br>
    Reports state changes in the Multistate Input cluster: `toggle`.

  - **Momentary On/Off**</br>
    Sends `On` when the button is pressed, and `Off` when released.</br>
    Reports state changes in the Multistate Input cluster: `momentary_pressed`, `momentary_released`.

# How to Use
Flash a device and install z2m converter.

## Flashing
See [JN5169 Flashing Guide](https://github.com/mgavryliuk/zcf-jn5169-ed-switches/?tab=readme-ov-file#flashing) for detailed flashing instructions.

## Zigbee2MQTT Converter
For more details, see the [External Converters](https://www.zigbee2mqtt.io/advanced/more/external_converters.html) documentation.

# Screenshots
![Z2M About](images/z2m_about.png)
![Z2M Exposes](images/z2m_exposes.png)
![Z2M Clusters](images/z2m_clusters.png)
