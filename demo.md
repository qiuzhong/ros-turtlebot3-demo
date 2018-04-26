# Introduction
Run the teleop key demo program to control the TurtleBot3 Burger on both Raspberry Pi (localhost) and remote PC (remote via Wi-Fi)

## Requirements:
Don't remote the `turtlebot3_teleop` program when building turtlebot3 program suites, see [this](http://emanual.robotis.com/docs/en/platform/turtlebot3/raspberry_pi_3_setup/#raspberry-pi-3-setup)

## The Localhost way
In this way, we'll launch two processes on the Raspberry and press key to control the TurtleBot3 Burger. We recommend you to connect to the Raspberry Pi via SSH in the same LAN. You need to boot the Raspberry Pi first with keyboard/mouse/monitor, after the login and Wi-Fi connected, make sure SSH service is on.

1. Launch the `turtlebot3_bringup` process on Raspberry Pi by

`$ roslaunch turtlebot3_bringup turtlebot3_robot.launch`

After that, you can unplug the keyboard/mouse/monitor and put it on the ground

2. Connect to the Raspberry Pi via SSH and launch the `teleop` program on the Raspberry Pi

`$ roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch`

After that, follow the instructions from screen.

## The remote PC way:
In this way, you only need the `bringup` process on the Raspberry Pi. The `teleop` control program is running on the remote PC. They communicate via the Wi-Fi network.
1. Launch the `turtlebot3_bringup` process on Raspberry Pi by

`$ roslaunch turtlebot3_bringup turtlebot3_robot.launch`

2. On remote PC, launch the processes on each terminal tab:

```
$ roscore
$ roslaunch turtlebot3_bringup turtlebot3_remote.launch
$ roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch
```

In terminal tab of the `teleop` control program, follow the instructions from screen.
