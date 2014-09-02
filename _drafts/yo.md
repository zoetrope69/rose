---
layout: post
title:  'Content Distribution with Yo and Snapchat - Blog · ROSE Digital ✏'
post_title: 'Content Distribution with Yo and Snapchat'
date:   2014-05-30 14:12:09
author: zac
categories: blog
---

## Snapchat

dodgy api etc
send an image
recieve stuff

## Yo

Yo claims to be a context driven messaging service with "zero-character communication". I am a big fan of the service, not only is fun but it is interesting how you can context blah blah. 

### Using the Yo API

If you haven't already, create a _personal_ Yo account.

**Do not create a normal account for your service.** With Yo you create API accounts, I made the mistake of creating the 'ROSEDIGITAL' account as a normal account and you can't use this for the API.

### Sign in to the dev portal

Go to [dev.justyo.co](http://dev.justyo.co/) and enter your _normal_ log in details.

+ what yo is
+ some history
+ the trending thing lol
+ how we use it
+ github projs

```
curl https://api.justyo.co/yoall/?api_token=f20aab16-30d2-ed46-5f22-bc0a2050a2be&link=http://rosedigital.co.uk
```