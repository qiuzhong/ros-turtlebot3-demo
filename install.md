#Introduction
Install ROS on the remote PC and Raspberry Pi 3

## Steps:
### For remote PC
1. Install Ubuntu 16.04 on the remote PC
2. Install ROS on the remote PC
Please refer to the [official documentation](http://emanual.robotis.com/docs/en/platform/turtlebot3/pc_setup/#install-ubuntu-on-remote-pc-desktop-or-laptop-pc)

**Notice**: during installing ROS, it will download a script `install_ros_kinetic.sh` and executing this script to install the ROS packages. You may fail to install them when you're in a proxy environment. In that case, you need to modify this script to make it work.

### For Raspberry Pi:
1. Install Ubuntu Mate 16.04 on the Raspberry Pi
2. Install ROS on the Raspberry Pi
For both steps, you can refer to the [office documentation](http://emanual.robotis.com/docs/en/platform/turtlebot3/raspberry_pi_3_setup/#raspberry-pi-3-setup)

**Notice**: during installing ROS, it will download a script `install_ros_kinetic_rp3.sh`

### OpenCR firmware update
When you complete the Raspberry Pi setup, you need to update the OpenCR firmware, see the [official instruction](http://emanual.robotis.com/docs/en/platform/turtlebot3/opencr_setup/#opencr10-firmware-upload-for-tb3)