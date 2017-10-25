import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ButtonYaw from './ButtonYaw';


const AlbumDetails = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;
    const { textContainer, thumbnailContainer, thumbnailStyle, textStyle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={textContainer}>
                    <Text style={textStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <ButtonYaw onPress={() => Linking.openURL(url)}>
                    Buy Now
                </ButtonYaw>
            </CardSection>
        </Card>
    );
};


const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 18,
        color: 'black'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    }
};


export default AlbumDetails;
