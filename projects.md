---
layout: default
title: Projects
permalink: /projects/
---

# All Projects

## Computer Engineering
<div class="project-grid">
  {% for post in site.categories.CE %}
    <div class="card">
      <div class="card-content">
        <span class="tag ce">Hardware</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <a href="{{ post.url }}" class="read-more">Read More &rarr;</a>
      </div>
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}" class="card-image">
      {% endif %}
    </div>
  {% endfor %}
</div>

<hr style="margin: 3rem 0; border: 0; border-top: 1px solid #ddd;">

## UX Research & Design
<div class="project-grid">
  {% for post in site.categories.UX %}
    <div class="card">
      <div class="card-content">
        <span class="tag ux">Design</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <a href="{{ post.url }}" class="read-more">Read More &rarr;</a>
      </div>
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}" class="card-image">
      {% endif %}
    </div>
  {% endfor %}
</div>