If you are a developer of Minecraft Bedrock mods, and you are tired of having to look for the folders of your worlds by the levelname.txt file, this tool will be very useful.

The folders of Minecraft Bedrock worlds do not correspond to the name of the world, but have a name such as “4ijXYSqRCgA=” or “IKxOZDQGDwA=”. If you wanted to do something with your world folder, you had to find it by opening all the folders one by one to read the file in which the world name is. If you have many worlds, this technique is not very efficient.

To make this task easier, download the repository and follow the instructions (they are for Windows 10):

First of all, verify that you have Node.js installed by opening the Windows CMD and typing “node -v”. This should show the version of Node.js. If you get an error message instead, you can download Node.js here: https://nodejs.org/en. After that, repeat the previous step to confirm that it has installed correctly. 

You should have the repository files grouped in a single folder. If not, group them into one.

After that, go to the config.json file, and enter the address of your minecraftWorlds folder between the quotes. If you don't know how to find it, you will find the necessary information at the bottom.

Finally, you will need to Shift + Right Click on an empty space in the folder and select the option that says “Open PowerShell window here”. Then you type “node .” in the command line and you are done.

How to find the minecraftWorlds folder

First, you must do Win + R, and a prompt will open in which you must type “appdata”. Then, go to Local>Packages>Microsoft.MinecraftUWP_randomnumbers>LocalState>games>com.mojang>minecraftWorlds. Then right click on the address bar in File Explorer, and hit “Copy address as text”.
