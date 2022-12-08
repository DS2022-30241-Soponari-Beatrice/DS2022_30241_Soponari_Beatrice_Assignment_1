package ro.tuc.ds2020.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.services.ReceiverService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/receiver")
public class ReceiverController {
    private final ReceiverService receiver;

    public ReceiverController(ReceiverService receiver) {
        this.receiver = receiver;
    }
    @GetMapping()
    public void receive() throws Exception {
        receiver.receive();
    }

}
