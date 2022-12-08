package ro.tuc.ds2020.services;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
public class ReceiverService {
    private final static String QUEUE_NAME = "hello";

    public void receive() throws Exception {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setUri("amqps://xtminpqz:1LFnTbieXSB_iViywO4otwFHgs0_vGeY@goose.rmq2.cloudamqp.com/xtminpqz");
        Connection connection = factory.newConnection();
        Channel channel = connection.createChannel();

        channel.queueDeclare(QUEUE_NAME, false, false, false, null);
        System.out.println(" [*] Waiting for messages. To exit press CTRL+C");

        DeliverCallback deliverCallback = (consumerTag, delivery) -> {
            String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
            System.out.println(" [x] Received '" + message + "'");
        };
        channel.basicConsume(QUEUE_NAME, true, deliverCallback, consumerTag -> { });
    }
}
