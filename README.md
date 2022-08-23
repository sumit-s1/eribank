# eribank
Script to Automate Login feature on eriBank app

Script contains implementation of login scenarios on the eriBank App

# Test run will happen on the locally configured simulator

#Pre-requisite to run the script
- Clone the repo
- Run 'npm install'
- Install Android Studio
- Configure Virtual Simulator
- Start the virtual simulator
- Get the virtual sim details using command "adb devices"
- Add the simulator details in the wdio.conf file in the repo under capabilities section
- Trigger the script with the command: "npx wdio run wdio.conf.js"


# As the scripting was done on Windows laptop, installation for iOS simulator was not feasible.
To ensure that the script runs even on the iOS laptop, please add the iOS loactors in the locators.json file located in the `helper` folder.
