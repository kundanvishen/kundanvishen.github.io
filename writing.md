---
layout: default
title: Writing
permalink: /writing/
description: Essays and notes from building Hoomans.
---

# Writing

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %Y" }}</time></li>
  {% endfor %}
</ul>
{% else %}
Nothing here yet. The longer pieces currently live on [LinkedIn](https://www.linkedin.com/in/kundan1); I'm moving them over.
{% endif %}
