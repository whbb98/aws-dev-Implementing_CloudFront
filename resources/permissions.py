import boto3
import json

S3API = boto3.client("s3", region_name="us-east-1") 
bucket_name = "c73321a1486378l3917275t1w949881621299-s3bucket-xwg7yulzxh3y"

policy_file = open("/home/ec2-user/environment/resources/public_policy.json", "r")


S3API.put_bucket_policy(
    Bucket = bucket_name,
    Policy = policy_file.read()
)
print ("Setting Permissions - DONE")