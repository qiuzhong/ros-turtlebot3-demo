# Introduction
ROS1 turtlesim demo

## Installation
Install the `turtlesim` package by
```
$ sudo apt install ros-kinetic-turtlesim
```

## Run demo
### Run demo with teleop
* In terminal 1, run `roscore`
  ```
  $ roscore
  ```

* In terminal 2, run `turtlesim`
  ```
  $ rosrun turltlesim turtlesim_node
  ```

* In terminal 3, run `teleop_key`
  ```
  $ rosrun turtlesim turtle_teleop_key
  ```

**Notice**:
  * Up arrow key: move left
  * Down arrow key: move right
  * Left & right arrow keys: adjust angular

### Publishing message via `rclnodejs`
* Launch `roscore` and `turtlesim`
* Launch `ros1_bridge`:
  ```
  $ export ROS_MASTER_URI=http://localhost:11311
  $ ros2 run ros1_bridge dynamic_bridge
  ```
* Running `rclnodejs` code:
  ```
  let msgLeft = {
    linear: {x: -2.0, y: 0.0, z: 0.0},
    angular: {x: 0.0, y: 0.0, z: 0.0}
  };

  setTimeout(() => {
    publisher.publish(msgLeft);
  }, 1000);
  ```

### Publishing message via `ros2-web-bridge`
* Launch `roscore` and `turtlesim` and `ros1_bridge`
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

* Access `http://127.0.0.1:8080/turtle.html`, click `Left` and `Right` buttons
  **Notice**: There is a bug: clicking the buttons for the first time will not work, it will work sencond time.

### Publishing message via the `rostopic` utility
* Move left
  ```
  $ rostopic pub -1 /turtle1/cmd_vel geometry_msgs/Twist -- '[-2.0, 0.0, 0.0]' '[0.0, 0.0, 0.0]'
  ```

* Move right
  ```
  $ rostopic pub -1 /turtle1/cmd_vel geometry_msgs/Twist -- '[2.0, 0.0, 0.0]' '[0.0, 0.0, 0.0]'
  ```
