> ⚠️ **Note:** After flashing custom firmware, the device will no longer be compatible with Aqara coordinators/hubs. It will only work with standard Zigbee coordinators like Zigbee2MQTT, ZHA, or deCONZ.

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Screenshots](#screenshots)

# Overview
**[WXKG15LM](https://www.zigbee2mqtt.io/devices/WXKG15LM.html)** is a wireless remote switch that is based on the JN5189 chip.

**Sources:** https://github.com/mgavryliuk/zcf-jn5189-ed-switches  
**Board Documentation:** https://github.com/mgavryliuk/zcf-jn5189-ed-switches/blob/master/firmwares/WXKG15LM/README.md  
**Firmwares:** Use the latest release from the [`Releases`](https://github.com/mgavryliuk/zcf-jn5189-ed-switches/releases) page  
**Z2M Converter:** https://github.com/mgavryliuk/zcf-jn5189-ed-switches/blob/master/firmwares/WXKG15LM/z2m_converter.js

# Features
The custom firmware supports the following features:
- **Pairing**  
  The device can join a Zigbee network using a standard pairing procedure. To enter pairing mode, press **both buttons** and hold until the LEDs start blinking rapidly.

- **Binding & Groups**  
    Supports [binding](https://www.zigbee2mqtt.io/guide/usage/binding.html) to other devices and groups in `toggle` operation mode.

- **Prevent reset**  
    Supports configuration to prevent accidental device reset. This feature must be enabled manually.

- **Operation Modes**  
  You can choose from several modes depending on your use case:
  - **Multistate**  
    Reports click events using the MultiState Input cluster. Possible values are: `single_click_left`, `single_click_right`, `double_click_left`, `double_click_right`, `triple_click_left`, `triple_click_right`, `hold_left`, `hold_right`, `release_left`, `release_right`

  - **Action**  
    Sends `Toggle` Zigbee command to the bound device on button press.  
    Reports state changes in the Multistate Input cluster: `toggle_left`, `toggle_right`

  - **Momentary On/Off**  
    Sends `On` Zigbee command when the button is pressed, and `Off` when released.  
    Reports state changes in the Multistate Input cluster: `momentary_pressed_left`, `momentary_pressed_right`, `momentary_released_left`, `momentary_released_right`

# Usage
1. [Flash the device](https://github.com/mgavryliuk/zcf-jn5189-ed-switches#flashing)
2. Install the [Z2M converter](https://github.com/mgavryliuk/zcf-jn5189-ed-switches/blob/master/firmwares/WXKG15LM/z2m_converter.js)
3. [Pair the device](https://github.com/mgavryliuk/zcf-jn5189-ed-switches#pairing-after-flashing)

# Screenshots
![Z2M About](z2m_about.png)
![Z2M Exposes](z2m_exposes.png)
![Z2M Clusters](z2m_clusters.png)
