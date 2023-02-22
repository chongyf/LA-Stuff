if (opcode == OpCodes.PKTAuctionSearchResult)
                {
                    loggedAuctionPacketCount++;
                    onAuctionPacketTotalCount?.Invoke(loggedAuctionPacketCount);

                    var payloadJoin = string.Join(",", payload);
                    var debugPayload = $"{{{payloadJoin}}}";

                    var pc = new PKTAuctionSearchResult(new BitReader(payload));


                    PSO.CurrentAccessories.AddRange(pc.Accessories);

                    foreach (var acc in pc.Accessories)
                    {
                        Trace.WriteLine($"{acc.AccessoryType} {acc.BuyNowPrice} {acc.Stats.StatType1} - {acc.Stats.Stat1Quantity} | {acc.Stats.StatType2} - {acc.Stats.Stat2Quantity} | {acc.Engravings[0].EngravingType} - {acc.Engravings[0].EngravingValue} | {acc.Engravings[1].EngravingType} - {acc.Engravings[1].EngravingValue} | {acc.NegativeEngraving.EngravingType} - {acc.NegativeEngraving.EngravingValue}");
                    }

                    Form form = Application.OpenForms["MainWindow"];

                    if (form != null)
                    {
                        (form as MainWindow).UpdateCountText();
                    }
                }