package org.example.cashcraftbackend.controller;

import org.example.cashcraftbackend.model.FinalSplitModel;
import org.example.cashcraftbackend.service.FinalSplitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/FinalSplit")
@CrossOrigin
public class FinalSplitController {
    @Autowired
    private FinalSplitService finalSplitService;

    @GetMapping("/{id}")
    public List<FinalSplitModel> getFinalSplit(@PathVariable("id") Long groupID){
        return finalSplitService.getFinalSplit(groupID);
    }


}
