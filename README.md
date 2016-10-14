#使用方法：
##1.本程序是Java代码，已经实现了对应方法，同时直接运行Mian即可以看到对应的输出效果，输出结果和l题目中一致。
##2.如果想修改测试用例，直接修改main函数里的字符串数组strings即可。
##3.代码详解：
###3.1.实现函数private static int getdayOfWeek(String str)，将日期换算成星期几，获取当天星期几，1表示星期一、2表示星期二，以此类推，7表示星期日。输入为日期的字符串，如2016-10-14
###3.2.实现函数private static int getTotalfields(String str)，将人数转换成当天所定场次数。输入为参加人数字符串，如“26”，表示有26人参加。
###3.3.实现函数private static int getPay(int dayOfWeek,int startHour, int endtHour, int totalfields)，dayOfWeek表示星期几，startHour表示场次s开始时间，endtHour表示结束时间，totalfields表示所定场地数，返回定场地费用
###3.4.实现函数private static String generateSummary(String[] strings)，获取总收入、总费用和总盈利情况，并且返回对应的字符串
