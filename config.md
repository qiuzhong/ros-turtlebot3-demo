# Introduction
TurtleBot3 Burger demo configuration after software installation

## Pre-condition
Make sure the remote PC and Raspberry Pi are in the same Wi-Fi network.

## For Remote PC:
1. Find the IP of the remote PC in the Wi-Fi network
2. Edit `~/.bashrc`:
  * replace the `localhost` in the `ROS_MASTER_URI` and `ROS_HOSTNAME` environment variables to the IP got from Step 1.
  * Set the `TURTLEBOT3_MODEL=burger`

For more details, please refer to [official manual](http://emanual.robotis.com/docs/en/platform/turtlebot3/pc_setup/#network-configuration)

## For Raspberry Pi
1. Find the IP of the Raspberry Pi in the Wi-Fi network
2. Edit `~/.bashrc`:
  * replace the `localhost` in the `ROS_MASTER_URI` to the **IP of the remote PC**
  * replace the `localhost` in the `ROS_HOSTNAME` to the **IP of the Raspberry Pi**

For more details, please refer to [official manual](http://emanual.robotis.com/docs/en/platform/turtlebot3/raspberry_pi_3_setup/#raspberry-pi-3-setup)