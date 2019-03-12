# JavaFx2 project
The project is written as a wrapper desktop application with a `JxBrowser` webview. The libraries are uploaded with the project. 

This project only uses an evaluation license for this API. Everyone can obtain an evaluation license if needed from the link shown below:

https://www.teamdev.com/jxbrowser

# Setup
1. Download the project or use git to sync it to your computer.
2. Add the JxBrowser and license jar libraries into the build path of the IDE.

# Run
Run the project as a JavaFx2 application

# Configuration (OPTIONAL)
To point this project to your own docker, modify the following line in src/sample/Main.java:

`private static final String remoteUrl = "http://18.222.230.128:8080";`

# Build
1. The project can be built as runnable JavaFx jar file with all libraries added as manifest entries.
2. The main application .jar can be converted to .exe by using Launch4J: http://launch4j.sourceforge.net/