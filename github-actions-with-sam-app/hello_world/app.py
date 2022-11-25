import boto3
import os
import json
from boto3.dynamodb.conditions import Key

ddbName = os.environ["dbName"]

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(ddbName) 


def get_count():
   response = table.query(
       KeyConditionExpression=Key('stat').eq('Quantity')
       )
   count = response['Items'][0]['Quantity']
   return count


def lambda_handler(event, context):
   response = table.update_item(     
       Key={        
           'stat': 'Quantity'
       },   
       UpdateExpression='ADD ' + 'Quantity' + ' :incr',
       ExpressionAttributeValues={        
           ':incr': 1   
       },    
       ReturnValues="UPDATED_NEW"
   )


   return {
       'statusCode': 200,
       'headers': {
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
           'Access-Control-Allow-Credentials': 'true',
           'Content-Type': 'application/json'
       },
       'body': get_count()
   }