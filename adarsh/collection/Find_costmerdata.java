import java.util.Arrays;
import java.util.List;

public class Find_costmerdata {

	public static void main(String[] args) {
		List<costumerData>  finditems = Arrays.asList(new costumerData("adarsh",800,"Rice"), new costumerData("manoj",800,"wheet"), new costumerData("abhi",1000,"Nuts"));
		belowThousandList(finditems);

	}
	
	public static void belowThousandList (List<costumerData> finditems) {
		costumerData bilAmount=finditems.stream()
         .filter(bill -> bill.getbill() <1000)
          .findAny().orElse(null);
        		
		System.out.println(bilAmount.getbill() +" "+bilAmount.getName());
       }
}
