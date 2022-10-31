function findFriends(friends, user) {
  const friendsArr = [];
  for (const friend of friends) {
    if (friend[0] === user) {
      friendsArr.push(friend[1]);
    } else if (friend[1] === user) {
      friendsArr.push(friend[0]);
    }
  }
  return friendsArr;
}

function findRecommendFriends(recommendFrindsArr, user, closeFriend, friends) {
  for (const friend of friends) {
    if (friend[0] === closeFriend && friend[1] !== user) {
      recommendFrindsArr.push(friend[1]);
    } else if (friend[1] === closeFriend && friend[0] !== user) {
      recommendFrindsArr.push(friend[0]);
    }
  }
}

function getRecommendFriendsArr(friends, friendsArr, user) {
  const recommendFrindsArr = [];
  [...friendsArr].map((friend) =>
    findRecommendFriends(recommendFrindsArr, user, friend, friends)
  );
  return recommendFrindsArr;
}

function problem7(user, friends, visitors) {
  var answer;
  const friendsArr = findFriends(friends, user);
  const recommendFrindsArr = getRecommendFriendsArr(friends, friendsArr, user);
  return answer;
}

module.exports = problem7;
