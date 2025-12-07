---
layout: default
title: Projects
permalink: /projects/
---

# All Projects

## Computer Engineering (CE)
<div class="project-grid">
  {% for post in site.categories.CE %}
    <div class="card">
      <span class="tag ce">Hardware</span>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>

<hr style="margin: 3rem 0; border: 0; border-top: 1px solid #ddd;">

## UX Research & Design
<div class="project-grid">
  {% for post in site.categories.UX %}
    <div class="card">
      <span class="tag ux">Design</span>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>