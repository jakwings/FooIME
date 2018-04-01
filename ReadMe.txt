About
-------

MacOS supports JavaScript for automation since 10.10 and bridges Objective-C
and JavaScript, which is nice for fiddling with the InputMethodKit framework.

Therefore, I made this simple input method for rotating the English letters by
13 places (so called ROT13 transformation).  It should not be very difficult
to develop more powerful ones with this prototype.

Building
----------

Run ./compile.sh and build the IME in "$PWD/build".

Installation
--------------

Run ./deploy.sh and deploy the IME to "$HOME/Library/Input Methods".

Please make sure the IME is not activated for any application when deploying.

To avoid the headache about deactivation/activation, use eval():

  https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/Importing-Scripts
