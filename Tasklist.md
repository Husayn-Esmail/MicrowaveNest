# Task List

A list of jobs we have to do.

## What data do we need?

- list of microwaves
- Map of floors
  - Marked map of microwaves on floors

## Features

- Flagging/Resolving issues with microwaves
- upvoting/downvoting microwaves
- Showing a map of all microwaves available and their status
- giving a list and directions to the closest microwaves
- filter by working and non working microwaves
- filter by building and by floor

## Front End

## Backend

- Create Database
- Implement authentication

## DB Schema

### Microwave

- id (int) (PK)
- building_id (int) (FK)
- floor_id (int) (FK)
- status (bool)
- date updated (timedate)
- upvote (int)
- downvote (int)

### Comments

- id (int) (PK)
- microvave_id (FK)
- comment (char)
- user (char)

### Building

- id (int)
- name (char)
- floor_id (int) (FK)
- building_hours (char)

### Floor

- id (int) (PK)
- number (int)
- map (image)
- building_name
- number_of_microwaves (int)
