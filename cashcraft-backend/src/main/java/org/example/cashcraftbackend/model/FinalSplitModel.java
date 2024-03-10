package org.example.cashcraftbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.cashcraftbackend.entity.Group;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FinalSplitModel {
    private Long finalPayTo;
    private Long finalPayBy;
    private Float finalAmt;
    private Group finalSplitGrp;
}
