import pymysql

def mysqlconnect():
	# To connect MySQL database
	conn = pymysql.connect(
		host='dbfirst.cdz0hm4ywgsy.ap-south-1.rds.amazonaws.com',
		user='adminUser',
		password = "",
		db='dbfirst',
		)
	
	cur = conn.cursor()
	cur.execute("select @@version")
	output = cur.fetchall()
	print(output)
	
	# To close the connection
	conn.close()

# Driver Code
if __name__ == "__main__" :
	mysqlconnect()

