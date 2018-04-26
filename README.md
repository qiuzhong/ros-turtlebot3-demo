# Introduction
Notes of ROS demo based on Robot TurtleBot3 Burger

## Hardware requirements:
* TurtleBot3 Burger
* Remote PC: A Ubuntu system running on a laptop or PC (Wi-Fi is required)
* Raspberry Pi 3: A computing platform for the TurtleBot3 Burger

# Documentation map:
* [Terms](./terms.md)
* [Installation](./install.md)
* [Configuration](./config.md)
* [Run demo](./demo.md)

## FAQ:

### 
* Q: I installed the ROS on Raspberry, but when it failed to `turtlebot3` and `turtlebot3_msgs` package on the Raspberry Pi.
* A: Please check if your ROS installation is completed. The ROS installation is done by a script named `install_ros_kinetic_rp3.sh`
When you're in a proxy network environment, this script may failed at some steps though it will finally `exit 0`. So make sure

### 
* Q: I launched the `bringup` and `teleop` control program, the Tutlebot3 Burger didn't work.
* A: Please do the following check:
  * Check if the OpenCR and Raspberry Pi are powered by the battery (If the Raspberry Pi is powered by USB cable, it will not work)
  * Press the buttons of OpenCR to check if the motor is working, see [this instruction](http://emanual.robotis.com/docs/en/platform/turtlebot3/hardware_setup/#basic-operation)
  * If the motor is OK, then check if the OpenCR firmware is upgraded.
  * If the OpenCR firmware is upgraded, then check if ROS installation is complete.

### 
* Q: The `teleop` control program can work on the Raspberry Pi, but not work on the remote PC
* A: Please check if your `ROS_MASTER_URI` environments in `~/.bashrc` is set as the **IP of the remote PC**.