import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.commons.io.FileUtils;

class FileOperationService {
	
	//this method is used to creating file
	//this method is used to writing file
	public void createAndWriteFile(File file){
		try{
			 FileUtils.touch(file);
			 FileUtils.writeStringToFile(file,"ccccc","UTF-8",true);
			 } catch (IOException e){
			e.printStackTrace();
		}
				if(file.exists()){
			System.out.println("file is exist");
		}else{
			System.out.println("file  doesnot exist" +"\n");
			}
				System.out.println("___ ___ ___ ___ ___ ___ __");
	}
	
	//this method is used to copying the one file to another file
	//this method is used to  the one file to another file
	public void appendContent(){
		try{
			File srcFile1 = new File("adarsh.txt");
			File destDir1 = new  File("angadi.txt");
			FileUtils.copyFileToDirectory(srcFile1,destDir1);
			System.out.println("files are copied");
			FileUtils.writeStringToFile(srcFile1,"bbbbb","UTF-8",true);
			System.out.println("data is appended" +"\n");
			System.out.println("____ ____ _____ ____ ___");
		}catch(Exception e){	
		}
	}
	
	
	//This method is uses to copy the one file to another directory.
	//And compared coped file content with existing file is both are same delete the existing one.
	public void replaceWord()  {
		File srcFile = new File("E:\\Programs\\fileutiltest\\test.txt");
		File destDir = new  File("E:\\Programs\\fileutiltest1");
		try {
			FileUtils.copyFileToDirectory(srcFile,destDir);
			System.out.println("files are copied");
			File firstFile = new File("E:\\Programs\\fileutiltest1\\test.txt");	
			File secondFile = new File("E:\\Programs\\fileutiltest1\\alreadytest.txt");
			String firstFileContent = null;
			String secondFileContent = null;
			firstFileContent = FileUtils.readFileToString(firstFile, StandardCharsets.UTF_8);
			secondFileContent = FileUtils.readFileToString(secondFile, StandardCharsets.UTF_8);
			System.out.println("First file data is   "+ firstFileContent);
			System.out.println("Second file data is   "+ secondFileContent);
			if(firstFileContent.equals(secondFileContent)) {
				secondFile.delete();
				System.out.println("Both files are Equeal Deleted sucussfully");
			} else {
				System.out.println("Both files are not Equeal");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}	 
}


 
   