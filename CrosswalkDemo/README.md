# CrosswalkDemo
The android project. Open it in android studio. This has been taken from a demo of CrossWalk plugin as we needed support for HTML 5 and webGL in app webview.

# Setup
To open this project in Android Studo:

1. Download the project or use git to sync it to your computer.
2. In Android Studio choose: File > Import Project ...
3. Navigate to your project on disk, select it and choose "OK".

# Change the url (OPTIONAL)
go to org.diego.android.crosswalkdemo.MainActivity

Modify this like to point to your remote docker:
xWalkWebView.load("http://18.222.230.128:8080", null);

# Run
Run the project using android run command to view this in any emulator.
