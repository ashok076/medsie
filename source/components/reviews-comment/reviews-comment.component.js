import React from "react";
import {View, FlatList} from 'react-native';
import {Text, Title, Caption, Avatar, Card} from 'react-native-paper';
import Stars from 'react-native-stars';

import Star from '../../assets/svg-files/starfilled.svg'
import StarOutline from '../../assets/svg-files/star-outline.svg'
import ReadMore from '../../lib/read-more/read-more.lib'

import styles from './reviews-comment.style';

const ReviewsComment = ({list}) => (
    <View>
        <FlatList
            data={list}
            renderItem={(item, id) => renderReviews(item)}
            />
    </View>
)

renderReviews = (item) => (
    <Card style={styles.card} elevation={1}>
        <View style={styles.row}>
            <Avatar.Text size={30} label="M" />
            <View style={styles.usernameContainer}>
            <Text>User Name</Text>
            <Caption>Time</Caption>
            </View>
        </View>
        <View style={[styles.row, styles.ratingStarView]}>
            <Stars
                default={3}
                count={5}
                starSize={16}
                fullStar={<Star width={16} height={16}/>}
                emptyStar={<StarOutline width={16} height={16}/>}
                />
                <Caption style={styles.ratinTxt}>3</Caption>
        </View>
        <View>
            <Text>Title of the comment/review</Text>
            <ReadMore
                    numberOfLines={5}
                    textStyle={styles.introduction}>
                    <Caption style={styles.introductions}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
      repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
      tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
      consequatur aut perferendis doloribus asperiores repellat. At vero eos et
      accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
      voluptatum deleniti atque corrupti quos dolores et quas molestias
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa
      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
      harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
      cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
      maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
      repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
      necessitatibus saepe eveniet ut et voluptates repudiandae sint et
      molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
      delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
      perferendis doloribus asperiores repellat.
                    </Caption>
            </ReadMore>
        </View>
    </Card>
)

export default ReviewsComment