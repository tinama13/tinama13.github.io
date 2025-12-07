---
layout: default
title: Coursework
permalink: /courses/
---

<h1>Coursework</h1>

<table>
  <thead>
    <tr>
      <th style="text-align:left">Course</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    {% for course in site.data.courses %}
      <tr>
        <td><strong>{{ course.name }}</strong> ({{ course.code }})</td>
        <td>{{ course.desc }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>