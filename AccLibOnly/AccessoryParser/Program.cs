using AccessoryOptimizerLib.Models;
using LostArkLogger;
using System.Text;
using static LostArkLogger.PKTAuctionSearchResult;

Main();

void Main()
{
    WorkoutNecklace();
    //WorkoutEarring();
}

void WorkoutNecklace()
{
    byte[] necklaceBytes = GetNecklaceData();
    necklaceBytes = RemoveFromByteArray(necklaceBytes, 10);

    byte[] buyout = GetValue(155555);
    byte[] bid = GetValue(88888);

    byte[] engraving1 = GetValue((int)EngravingType.Esoteric_Skill_Enhancement);
    byte[] engraving1Quantity = GetValue(5);

    byte[] engraving2 = GetValue((int)EngravingType.Raid_Captain);
    byte[] engraving2Quantity = GetValue(3);

    byte[] statType1 = GetValue((int)Stat_Type.Crit);
    byte[] statType1Quantity = GetValue(495);

    byte[] statType2 = GetValue((int)Stat_Type.Specialization);
    byte[] statType2Quantity = GetValue(497);

    byte[] negativeEngravingType = GetValue((int)EngravingType.Atk_Power_Reduction);
    byte[] negativeEngravingQuantity = GetValue(2);

    byte[] itemId = GetValue((int)NecklaceItemIds.Wailing_Chaos_Necklace);

    var buyout_byteToStart = Search(necklaceBytes, buyout.Reverse().ToArray());
    Console.WriteLine($"Buyout: {buyout_byteToStart}");
    var bid_byteToStart = Search(necklaceBytes, bid.Reverse().ToArray());
    Console.WriteLine($"Bid: {bid_byteToStart}");

    var engraving1_byteToStart = Search(necklaceBytes, engraving1.Reverse().ToArray());
    var engraving1Quantity_byteToStart = engraving1_byteToStart + 5;
    Console.WriteLine($"Engraving Type 1: {engraving1_byteToStart}");
    Console.WriteLine($"Engraving Quantity 1: {engraving1Quantity_byteToStart}");

    var engraving2_byteToStart = Search(necklaceBytes, engraving2.Reverse().ToArray());
    var engraving2Quantity_byteToStart = engraving2_byteToStart + 5;
    Console.WriteLine($"Engraving Type 2: {engraving2_byteToStart}");
    Console.WriteLine($"Engraving Quantity 2: {engraving2Quantity_byteToStart}");

    var statType1_byteToStart = Search(necklaceBytes, statType1.Reverse().ToArray());
    var statType1Quantity_byteToStart = Search(necklaceBytes, statType1Quantity.Reverse().ToArray());
    Console.WriteLine($"Stat Type 1: {statType1_byteToStart}");
    Console.WriteLine($"Stat Quantity 1: {statType1Quantity_byteToStart}");

    var statType2_byteToStart = Search(necklaceBytes, statType2.Reverse().ToArray());
    var statType2Quantity_byteToStart = Search(necklaceBytes, statType2Quantity.Reverse().ToArray());
    Console.WriteLine($"Stat Type 2: {statType2_byteToStart}");
    Console.WriteLine($"Stat Quantity 2: {statType2Quantity_byteToStart}");

    var negativeEngravingType_byteToStart = Search(necklaceBytes, negativeEngravingType.Reverse().ToArray());
    var negativeEngravingQuantity_byteToStart = negativeEngravingType_byteToStart + 9;
    Console.WriteLine($"Neg Engraving Type: {negativeEngravingType_byteToStart}");
    Console.WriteLine($"Neg Engraving Quantity: {negativeEngravingQuantity_byteToStart}");

    var itemId_byteToStart = Search(necklaceBytes, itemId.Reverse().ToArray());
    Console.WriteLine($"Item ID: {itemId_byteToStart}");
}

void WorkoutEarring()
{
    byte[] earringBytes = GetEarringData();
    earringBytes = RemoveFromByteArray(earringBytes, 10);

    byte[] buyout = GetValue(250000);
    byte[] bid = GetValue(220000);

    byte[] engraving1 = GetValue((int)EngravingType.Esoteric_Skill_Enhancement);
    byte[] engraving1Quantity = GetValue(5);

    byte[] engraving2 = GetValue((int)EngravingType.Adrenaline);
    byte[] engraving2Quantity = GetValue(3);

    byte[] statType1 = GetValue((int)Stat_Type.Swiftness);
    byte[] statType1Quantity = GetValue(295);

    byte[] negativeEngravingType = GetValue((int)EngravingType.Atk_Power_Reduction);
    byte[] negativeEngravingQuantity = GetValue(2);

    byte[] itemId = GetValue((int)EarringItemIds.Wailing_Aeon_Earrings);

    var buyout_byteToStart = Search(earringBytes, buyout.Reverse().ToArray());
    Console.WriteLine($"Buyout: {buyout_byteToStart}");
    var bid_byteToStart = Search(earringBytes, bid.Reverse().ToArray());
    Console.WriteLine($"Bid: {bid_byteToStart}");

    var engraving1_byteToStart = Search(earringBytes, engraving1.Reverse().ToArray());
    var engraving1Quantity_byteToStart = engraving1_byteToStart + 5;
    Console.WriteLine($"Engraving Type 1: {engraving1_byteToStart}");
    Console.WriteLine($"Engraving Quantity 1: {engraving1Quantity_byteToStart}");

    var engraving2_byteToStart = Search(earringBytes, engraving2.Reverse().ToArray());
    var engraving2Quantity_byteToStart = engraving2_byteToStart + 5;
    Console.WriteLine($"Engraving Type 2: {engraving2_byteToStart}");
    Console.WriteLine($"Engraving Quantity 2: {engraving2Quantity_byteToStart}");

    var statType1_byteToStart = Search(earringBytes, statType1.Reverse().ToArray());
    var statType1Quantity_byteToStart = Search(earringBytes, statType1Quantity.Reverse().ToArray());
    Console.WriteLine($"Stat Type 1: {statType1_byteToStart}");
    Console.WriteLine($"Stat Quantity 1: {statType1Quantity_byteToStart}");

    var negativeEngravingType_byteToStart = Search(earringBytes, negativeEngravingType.Reverse().ToArray());
    var negativeEngravingQuantity_byteToStart = negativeEngravingType_byteToStart + 9;
    Console.WriteLine($"Neg Engraving Type: {negativeEngravingType_byteToStart}");
    Console.WriteLine($"Neg Engraving Quantity: {negativeEngravingQuantity_byteToStart}");

    var itemId_byteToStart = Search(earringBytes, itemId.Reverse().ToArray());
    Console.WriteLine($"Item ID: {itemId_byteToStart}");
}

byte[] GetNecklaceData()
{
    return new byte[] {20,50,5,0,1,0,56,91,1,0,0,0,0,0,230,183,150,69,109,166,0,0,0,0,0,0,0,0,0,0,0,114,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,93,211,182,9,0,0,0,0,163,95,2,0,0,0,0,0,1,1,0,0,0,29,27,227,3,0,0,64,15,62,179,182,12,0,0,11,0,1,0,0,0,0,0,0,0,1,0,0,0,31,24,108,23,1,0,0,0,0,0,0,0,2,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,244,1,0,0,110,0,0,0,16,0,0,0,241,1,0,0,2,1,0,0,0,1,1,0,0,144,1,0,0,244,1,0,0,110,0,0,0,15,0,0,0,239,1,0,0,2,1,0,0,0,1,1,0,0,144,1,0,0,3,0,0,0,105,0,0,0,32,3,0,0,2,0,0,0,3,1,0,0,0,3,8,0,0,1,0,0,0,5,0,0,0,105,0,0,0,127,0,0,0,5,0,0,0,3,1,0,0,0,2,8,46,1,5,0,0,0,3,0,0,0,105,0,0,0,254,0,0,0,3,0,0,0,3,1,0,0,0,1,8,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,56,91,1,0,0,0,0,0,1,0,0,0,0,0,0,0}; 
}

byte[] GetEarringData()
{
    return new byte[] {20,50,5,0,1,0,160,134,1,0,0,0,0,0,230,183,244,208,19,231,0,0,0,0,0,0,0,0,0,0,0,136,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,77,179,9,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,65,117,84,10,0,0,192,9,64,179,182,12,0,0,47,0,1,0,0,0,0,0,0,0,1,0,0,0,31,24,108,23,1,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,200,0,0,0,210,0,0,0,16,0,0,0,197,0,0,0,2,1,0,0,0,1,1,0,0,160,0,0,0,5,0,0,0,105,0,0,0,141,0,0,0,5,0,0,0,3,1,0,0,0,2,3,0,0,5,0,0,0,3,0,0,0,105,0,0,0,249,0,0,0,3,0,0,0,3,1,0,0,0,1,3,0,0,3,0,0,0,3,0,0,0,105,0,0,0,32,3,0,0,2,0,0,0,3,1,0,0,0,3,3,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,160,134,1,0,0,0,0,0,1,0,0,0,0,0,0,0};
}

byte[] RemoveFromByteArray(byte[] src, int amountToDelete)
{
    byte[] dst = new byte[src.Length - amountToDelete];

    Array.Copy(src, amountToDelete, dst, 0, dst.Length);

    return dst;
}

int Search(byte[] src, byte[] pattern)
{
    Console.WriteLine("\n" + string.Join(",", pattern));
    int maxFirstCharSlot = src.Length - pattern.Length + 1;
    for (int i = 0; i < maxFirstCharSlot; i++)
    {
        if (src[i] != pattern[0]) // compare only first byte
            continue;

        // found a match on first byte, now try to match rest of the pattern
        for (int j = pattern.Length - 1; j >= 1; j--)
        {
            if (src[i + j] != pattern[j]) break;
            if (j == 1) return i;
        }
    }
    return -1;
}

byte[] GetValue(int intValue)
{
    byte[] intBytes = BitConverter.GetBytes(intValue);
    Array.Reverse(intBytes);
    byte[] result = intBytes;
    return result;
}

byte[] GetValue16(Int16 intValue)
{
    byte[] intBytes = BitConverter.GetBytes(intValue);
    Array.Reverse(intBytes);
    byte[] result = intBytes;
    return result;
}

uint GetInt16Value(byte[] bytes)
{
    Array.Reverse(bytes);
    uint intValue = BitConverter.ToUInt16(bytes, 0);
    return intValue;
}

uint GetInt32Value(byte[] bytes)
{
    Array.Reverse(bytes);
    uint intValue = BitConverter.ToUInt32(bytes, 0);
    return intValue;
}

long GetInt64Value(byte[] bytes)
{
    Array.Reverse(bytes);
    long intValue = BitConverter.ToInt64(bytes, 0);
    return intValue;
}