'use strict';

const rclnodejs = require('../index.js');

rclnodejs.init().then(() => {
  const node = rclnodejs.createNode('turtle_master');
  const Twist = rclnodejs.require('geometry_msgs/msg/Twist');
  const publisher = node.createPublisher(Twist, '/turtle1/cmd_vel');

  // let msgLeft = new Twist();
  // let msgRight = new Twist();

  // msgLeft.linear.x = -2.0;
  // msgLeft.linear.y = 0.0;
  // msgLeft.linear.z = 0.0;
  // msgLeft.angular.x = 0.0;
  // msgLeft.angular.y = 0.0;
  // msgLeft.angular.z = 0.0;

  // msgRight.linear.x = 2.0;
  // msgRight.linear.y = 0.0;
  // msgRight.linear.z = 0.0;
  // msgRight.angular.x = 0.0;
  // msgRight.angular.y = 0.0;
  // msgRight.angular.z = 0.0;

  let msgLeft = {
    linear: {x: -2.0, y: 0.0, z: 0.0},
    angular: {x: 0.0, y: 0.0, z: 0.0}
  };
  let msgRight = {
    linear: {x: 2.0, y: 0.0, z: 0.0},
    angular: {x: 0.0, y: 0.0, z: 0.0}
  };  
  var count = 0;

  // setInterval(() => {
  //   if (count % 2 === 0) {
  //     publisher.publish(msgLeft);
  //   } else {
  //     publisher.publish(msgRight);
  //   }
  //   count++;
  // }, 2000);

  setTimeout(() => {
    publisher.publish(msgLeft);
  }, 1000);

  setTimeout(() => {
    publisher.publish(msgRight);
    rclnodejs.shutdown();
  }, 2000);

  rclnodejs.spin(node);
}).catch((err) => {
  console.log(err);
});
