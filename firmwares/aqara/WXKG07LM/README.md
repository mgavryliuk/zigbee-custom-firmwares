- [Overview](#overview)
- [Features](#features)
- [How to Use](#how-to-use)
- [Screenshots](#screenshots)

# Overview
**[WXKG07LM](https://www.zigbee2mqtt.io/devices/WXKG07LM.html)** come with a very limited feature set and uses the JN5169 chip.</br>

> ⚠️ **Note:** After flashing custom firmware, the device will no longer be compatible with Aqara coordinators/hubs. It will only work with standard Zigbee coordinators like Zigbee2MQTT, ZHA, or deCONZ.

> ⚠️ **Note 2:** Battery voltage readings may not be very accurate.

### DIOs definition:
- Left LED - DIO 10
- Right LED - DIO 11
- Left button - DIO 12
- Right button - DIO 16

### Firmwares:
| Firmware | Note |
|----------|---------|
| 000001_20250426_WXKG07LM | Custom firmware with DEBUG disabled |
| 000001_20250426_WXKG07LM_debug | Custom firmware with DEBUG enabled |
| WXKG07LM_original | Original firmware. WXKG06LM and WXKG07LM share the same original firmware |

### Converter:
[WXKG07LM_converter.js](WXKG07LM_converter.js)

### Board:
Version: LM15-WS R1.1</br>
![Board Front](images/board_front.png)
![Board Back](images/board_back.png)

# Features
The custom firmware supports next features:
- **Pairing**</br>
  The device can join a Zigbee network using a standard pairing procedure. To enter pairing mode: press **both buttons** and hold until the LEDs start blinking rapidly **5 times**.

- **Binding & Groups**</br>
    Supports [binding](https://www.zigbee2mqtt.io/guide/usage/binding.html) to other devices and groups in `toggle` operation mode.

- **Prevent reset**</br>
    Supports configuration to prevent accidental device reset. This feature needs to be manually enabled.

- **Operation Modes**</br>
  You can choose from several modes depending on your use case:
  - **Multistate**</br>
    Reports click events using the MultiState Input cluster. Possible values are: `single_click_left`, `single_click_right`, `double_click_left`, `double_click_right`, `triple_click_left`, `triple_click_right`, `hold_left`, `hold_right`, `release_left`, `release_right`

  - **Action**</br>
    Sends `Toggle` Zigbee command to the binded device on button press.</br>
    Reports state changes in the Multistate Input cluster: `toggle_left`, `toggle_right`

  - **Momentary On/Off**</br>
    Sends `On` when the button is pressed, and `Off` when released.</br>
    Reports state changes in the Multistate Input cluster: `momentary_pressed_left`, `momentary_pressed_right`, `momentary_released_left`, `momentary_released_right`

# How to Use
Flash a device and install z2m converter.

## Flashing
See [JN5169 Flashing Guide](../../../docs/flashing/jn5169.md) for detailed flashing instructions.

## Zigbee2MQTT Converter
For more details, see the [External Converters](https://www.zigbee2mqtt.io/advanced/more/external_converters.html) documentation.

# Screenshots
![Z2M About](images/z2m_about.png)
![Z2M Exposes](images/z2m_exposes.png)
![Z2M Clusters](images/z2m_clusters.png)
