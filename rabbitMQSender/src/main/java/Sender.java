import com.opencsv.CSVReader;
import com.rabbitmq.client.ConnectionFactory;

import java.io.File;
import java.io.FileReader;

import com.rabbitmq.client.Connection;
import com.rabbitmq.client.Channel;

public class Sender {
    public static void main(String[] args){
        try {
            FileReader filereader = new FileReader(new File("sensor.csv"));

            CSVReader csvReader = new CSVReader(filereader);
            String[] nextRecord;
            while ((nextRecord = csvReader.readNext()) != null) {
                for (String cell : nextRecord) {
                    System.out.print(cell + "\t");
                    sendToQueue(cell);
                }
                Thread.sleep(100000);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }
    public static void sendToQueue(String message) throws Exception{
        String QUEUE_NAME = "hello";
        ConnectionFactory factory = new ConnectionFactory();
        //factory.setHost("localhost");
        factory.setUri("amqps://xtminpqz:1LFnTbieXSB_iViywO4otwFHgs0_vGeY@goose.rmq2.cloudamqp.com/xtminpqz");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare(QUEUE_NAME, false, false, false, null);
            channel.basicPublish("", QUEUE_NAME, null, message.getBytes());
            System.out.println(" [x] Sent '" + message + "'");
        }
    }

}
