# Get IP address

![get-ip-address field plug-in](extras/get-ip-address.jpg)

## Description

This field plug-in obtains the IP address of the device being used to fill out a SurveyCTO form. Once the IP address has been obtained, the form will automatically advance to the next field. You have the option to save either the actual IP address, or a hashed version of it (for enhanced privacy). See the [Parameters section](#parameters) below.

[![Download now](extras/download-button.png)](https://github.com/surveycto/get-ip-address/raw/master/get-ip-address.fieldplugin.zip)

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

**To use this field plug-in as-is**, just download the [get-ip-address.fieldplugin.zip](https://github.com/surveycto/get_ip_address/raw/master/get-ip-address.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.
    * **Note:** be sure to update the `manifest.json` file as well.
1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your field plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

## Parameters

| **Key** | **Value** |
| --- | --- | --- |
| `hash` (optional) | Set this to `yes` to save a 32-bit integer value instead of the actual IP address. |

> **Example:**  
> In the online Form Designer, you can enter `hash="yes"` in the *Plug-in parameters* box. If you are editing this form using a spreadsheet, enter `custom-get-ip-address(hash="yes")` in the *appearance* column.

If no parameters are supplied, the actual IP address will be saved.

## More resources

* **Test form**  
You can find a form definition in this repo here: [extras/sample_form](https://github.com/surveycto/get_ip_address/tree/master/extras/sample_form).

* **Developer documentation**  
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
