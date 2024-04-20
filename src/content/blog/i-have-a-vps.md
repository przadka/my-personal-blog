---
author: Michał Prządka
pubDatetime: 2023-03-12T14:57:52.737Z
title: I have a VPS!
postSlug: i-have-a-vps
featured: false
ogImage: /assets/circuit-board.jpg
description: What is my self-hosting setup and how I got there?
---

## Where to host a private website?

A few weeks ago I read a [great post from Michał Warda](https://grifel.dev/decentralization/) about hosting a personal website on a Raspberry located at home. At the time, I was thinking about starting my own personal website, preferably on my own, self-managed Linux server. So the timing was perfect and Michał (who I know personally from my time at [EL Passion](https://www.elpassion.com)) inspired me to finally get to work and deploy something.

I actually own a Raspberry Pi 3 myself which I use as a wireless print server and an air-quality monitor. So, I thought, with a bit of luck I could just follow the exact same steps and install a dockerized web-server that would serve any web traffic coming to my home. Not only a web-server but also [Coolify](https://coolify.io/), a self-hosted Heroku-style deployment platform which I could use for many other projects. It sounded almost too good to be true!

And, unfortunately, it wasn't true :) The installation process did not work. It exited with the following error:

```
Installing Coolify.
Pulling Coolify latest image (3.12.25).
no matching manifest for linux/arm/v7 in the manifest list entries
./install.sh exited unexpectedly with status: 1
```

...which, I'm guessing, is caused by the fact that Coolify doesn't support Raspberry 3. Crap!

## Amazon Micro

With this ~~failed~~ simple idea out of the way, it was time to find a solution that actually works. I did consider purchasing a Pi 4 and following Michał's steps on the same hardware. This would probably work. But the cost of a new one is around 100 USD and with all the extras (SD card, charger, cover) it can even be closer to 200 USD, which seemed a bit pricey.

If the server can't be in my home then let's put it in the cloud. I'm quite familiar with AWS so launching a small personal instance could be a option here. The cheapest instance type on AWS is **nano** but they come with only 0.5GB of memory. Trying to install Coolify on nano ended up with the instance completely freezing. I probably just drained the memory completely - not surprising, since Coolify expects 2GB according to their requirements. The next in line is the **micro** instance, which is a little more powerful and also more expensive but still just a few USD per month. If you are new to AWS, figuring out your costs can be [complicated](https://calculator.aws/#/addService/ec2-enhancement) but in my case, with a single micro machine running 24/7, it would be around 10USD/month (with tax) if I want to pay monthly, cost would be around 10 usd if I pay by month or around 5.5USD/month if I can pay annually.

## Virtual Private Servers

5.5 USD/month seemed like a good deal but I had second thoughts about paying for the whole year upfront. Or at least, paying upfront without some further research. Also, the micro instance offers only 1GB of memory whereas Coolify expects 2GB. So I kept looking.

I reviewed a few threads on **Hacker News** and **Reddit**, including the [discussion under Michał's post](https://news.ycombinator.com/item?id=34860655&utm_term=comment) I mentioned earlier. People recommended looking at cloud providers offering virtual private servers so I put together a list of providers I wanted to check:

- [Hetzner](https://www.hetzner.com/)
- [Digital Ocean](https://digitalocean.com/)
- [Vultr](https://www.vultr.com/)
- [OVH](https://www.ovhcloud.com)

The cost of a low-end cloud sever from these providers is around 5 USD per month with a monthly commitment. Some, like Hetzner, charge by the hour, so you don't even pay for the whole month if you delete a server you don't need. I included some examples of their pricing pages. OVH stood out as the cheapest (with their Starter offer labeled as "limited quantity" - no idea what that means) and Digital Ocean - as the most expensive. They all look quite similar in terms of specs and probably not very different in user experience for a simple use case like mine.

![OVH pricing page](/assets/ovh-pricing.png)
_OVH pricing page_

![Vultr pricing page](/assets/vultr-pricing.png)
_Vultr pricing page_

I did not want to go with the cheapest option just yet, so I decided to have some hands-on time with both OVH and Hetzner. Both offer 1CPU+2GB server which I deployed with Ubuntu. While for Hetzner the setup process took just a few seconds, for OVH I had to wait a few hours before I could actually log in and use my server. Apart from that, the experience was quite similar on both. I installed everything without any problems and shortly I could access them via my own domain. OVH console seems a bit less user-friendly and quite clunky compared with Hetzner but, again, with my simple use case, this alone did not justify a few extra dollars per year. In the end, I went with OVH. As a nice bonus, they have a data center in Warsaw, Poland which is where my server (and blog!) is currently located.

![Coolify announcing successful deployment of my blog](/assets/coolify-build.png)
_Coolify announcing successfull deployment of my blog_

## My current setup

My blog sits on an Ubuntu server that is hosted with OVH. Here is the full stack:

- "Starter" VPS from OVH, with 1 CPU, 2GB of ram and 20GB of storage (located in a data center in Warsaw),
- Ubuntu 22.04 LTS,
- dockerized web-server installed and managed by Coolify,
- NodeJS app built with [Astro](https://astro.build/) - installed and managed by Coolify, after pulling it from [my repo](https://github.com/przadka/michal-blog),
- modified version of the [Astro Paper theme](https://github.com/satnaing/astro-paper),
- domain name registerd with GoDaddy (for around 3USD for the first year).

Installing and using Coolify was the easiest part of the whole process. I am still baffled by how simple, smooth and quick it was. I went on their website, copied a terminal command to run the installation script and after a few minutes I had my blog on a SSL- protected website with a domain I had purchased just a few moments earlier. Sure, I am not completely new to this so maybe for a complete beginner it would have been more complicated. But I still remember the days when setting up a production LAMP server was the hardest part of the first release, and what worked locally rarely just worked on the production.

Here, everything just worked like magic. I guess this is, in part, the promise of Docker and dockerized environments. But the thing is - I have never actually used Docker and I have a very limited knowledge about it. Coolify abstracted all the details and complications away and I could just enjoy the ride. It feels weird to admit but I don't even know what web-server I am using. I just know it's there because something is responding on the https port and serving this content:)

The whole process took me about 2 or 3 hours and I finished it over two evenings. My server hosts two websites at the moment: this blog and a [portfolio page](https://anika.toasterthoughts.eu/) with my daughter's drawings. I can see that Coolify has an option to install [VS Code Server](https://code.visualstudio.com/docs/remote/vscode-server) and I will probably try it next. Maybe I will write something about it in another post.
