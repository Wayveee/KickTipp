package com.kicktippx.round;

public record RoundDto(Long id, String name, String description, String joinCode, String owner, boolean isPublic, int members) {}
