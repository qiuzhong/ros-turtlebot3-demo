# Introduction
ROS1 Turtlebot3 Gazebo simulator demo

## Installation
Install this package by source, it doesn't work if you install it by the `apt` way.
```
$ sudo apt install ros-kinetic-turtlebot3-msgs
$ source /opt/ros/kinetic/setup.bash
$ cd ~/catkin_ws/src
$ git clone https://github.com/ROBOTIS-GIT/turtlebot3_simulations.git
$ git clone https://github.com/ROBOTIS-GIT/turtlebot3.git
$ cd ~/catkin_ws
$ catkin_make
```

## Configuration
Set TURTLEBOT3_MODEL environment variable
```
$ echo "export TURTLEBOT3_MODEL=burger" >> ~/.bashrc
```

## Run and control turtlebot3 gazebo simulator
### Launch the gazebo simulator
In terminal 1:
```
$ cd ~/catkin_ws
$ source devel/setup.bash
$ roslaunch turtlebot3_gazebo turtlebot3_empty_world.launch
```

### Try the teleop_key controller:
In terminal 2:
```
$ cd ~/catkin_ws
$ source devel/setup.bash
$ roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch
```

## Control the simulator via rclnodejs
* Launch `ros1_bridge`:
  ```
  $ export ROS_MASTER_URI=http://localhost:11311
  $ ros2 run ros1_bridge dynamic_bridge --bridge-all-topics
  ```

* Run rclnodejs publisher:
  ```
  $ cd demo
  $ npm install
  $ node turtlebot3.js
  ```

## Control the simulator via browser:
* Launch `turtlebot3_empty_world.launch` and `ros1_bridge`
* Launch `ros2-web-bridge` server in a new terminal:
  ```
  $ cd ros2-web-bridge
  $ node bin/rosbridge.js
  ```
* Host demo html:
  ```
  $ cd demo
  $ http-server .
  ```

## Or you can launch `rosbridge_server` from ROS1 package:
```
$ roslaunch rosbridge_server rosbridge_websocket.launch
```
It's like the `ros2-web-bridge` server.

* Access `http://127.0.0.1:8080/turtlebot3.html`, click `Left` and `Right` buttons
  **Notice**: There is a bug: clicking the buttons for the first time will not work, it will work sencond time.


### Publishing message via the `rostopic` utility
* Move left
  ```
  $ rostopic pub --rate=10 /cmd_vel geometry_msgs/Twist -- '[-0.15, 0.0, 0.0]' '[0.0, 0.0, 0.0]'
  ```

* Move right
  ```
  $ rostopic pub --rate=10 /turtle1/cmd_vel geometry_msgs/Twist -- '[0.15, 0.0, 0.0]' '[0.0, 0.0, 0.0]'
  ```
