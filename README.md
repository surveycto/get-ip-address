# Get IP Address

# Description
This a plugin that provides a readonly text to get the IP address for webforms. I will auto advance once the IP address has been captured.

[![Download now](extras/download-button.png)](https://github.com/surveycto/get_ip_address/raw/master/get_ip_address.fieldplugin.zip)

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `text`|
| Default values | No |
| Custom constraint message | Yes |
| Custom required message | Yes |
| Read only | No |
| media:image | Yes |
| media:audio | Yes |
| media:video | Yes |

## How to use

**To use this field plug-in as-is**, just download the [get_ip_address.fieldplugin.zip](https://github.com/surveycto/get_ip_address/raw/master/get_ip_address.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.

    * **Note:** be sure to update the `manifest.json` file as well.

1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your field plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

## Parameters
The plug-in can take one parameter.
1. `hash` - when set to `yes`, this gives a 32-bit integer value instead of the actual IP address. Use this if you need to hide the IP address.

## More resources

* **Test form**  
You can find a form definition in this repo here: [extras/sample_form](https://github.com/surveycto/get_ip_address/tree/master/extras/sample_form).

* **Developer documentation**  
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
