### About

MacOS supports JavaScript for automation since 10.10 and bridges Objective-C and JavaScript, which is nice for playing around
with the `InputMethodKit` framework.

Therefore, I made this simple input method for rotating the English letters by 13 places (so called ROT13 transformation). It
should not be very difficult to develop more powerful ones with this prototype.

### Building

Open a Terminal window, relocate to the project's directory, and type the following command:

```
./osabuild
```

A `build` directory will be created with the build application in it.

### Installation

Run the following command to install the application:

```
./osabuild install
```

It will be deployed to `~/Library/Input Methods`.

Please make sure the **IME** is not activated for any application when deploying.

To avoid the headache about deactivation/activation, use `eval()`;
see [importing scripts](https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/Importing-Scripts).
