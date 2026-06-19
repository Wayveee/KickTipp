package com.kicktippx.tip;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tips")
public class TipController {
  private final TipService tipService;

  public TipController(TipService tipService) {
    this.tipService = tipService;
  }

  @PostMapping
  TipDtos.TipResponse submit(@Valid @RequestBody TipDtos.TipRequest request) {
    return tipService.submit(request);
  }
}
