package org.example.cashcraftbackend.service;



import org.example.cashcraftbackend.model.FinalSplitModel;

import java.util.List;

public interface FinalSplitService {
    List<FinalSplitModel> getFinalSplit(Long groupId);
}
