// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log("The color is green.");
//   });

// chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })
//       ],
//           actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });

// });

// window.addEventListener('load', (event) => {
//   let myAudio = new Audio("./ambient-music/LA13.mp3");
//   // myAudio.load();
//   myAudio.play();
// });

// chrome.alarms.onAlarm.addListener(function() {
//   chrome.browserAction.setBadgeText({text: ''});
//   chrome.notifications.create({
//       type:     'basic',
//       iconUrl:  'stay_hydrated.png',
//       title:    'Time to Hydrate',
//       message:  'Everyday I\'m Guzzlin\'!',
//       buttons: [
//         {title: 'Keep it Flowing.'}
//       ],
//       priority: 0});
// });

// chrome.notifications.onButtonClicked.addListener(function() {
//   chrome.storage.sync.get(['minutes'], function(item) {
//     chrome.browserAction.setBadgeText({text: 'ON'});
//     chrome.alarms.create({delayInMinutes: item.minutes});
//   });
// });

