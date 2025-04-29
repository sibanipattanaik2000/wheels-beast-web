import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';

interface Review {
  id: string;
  userName: string;
  userImage?: any;
  rating: number;
  timeAgo: string;
  comment: string;
  likes: number;
  dislikes: number;
  isLiked?: boolean;
  isDisliked?: boolean;
}

const mockReviews: Review[] = [
  {
    id: '1',
    userName: 'Hannah Burress',
    userImage: require('@/assets/images/Profile/avtar.png'), // Replace with actual image URL
    rating: 5.0,
    timeAgo: '2 days ago',
    comment: 'I really love this car 😍... Lacinia ullamcorper mattis id eu neque egestas feugiat. Eget aliquet nulla dignissim eget tortor auctor elementum magna ornare suscipit accumsan arcu.',
    likes: 100,
    dislikes: 12,
     isLiked: false,
    isDisliked: false,
  },
  {
    id: '2',
    userName: 'Darron Kulikowski',
    userImage: require('@/assets/images/Profile/avtar.png'), // Replace with actual image URL
    rating: 5.0,
    timeAgo: '1 month ago',
    comment: 'Amazing car... mattis id eu neque egestas feugiat. Eget aliquet nulla dignissim eget tortor auctor elementum magna.',
    likes: 9600,
    dislikes: 100,
     isLiked: false,
    isDisliked: false,
  },
  {
    id: '3',
    userName: 'Leif Floyd',
    userImage: require('@/assets/images/Profile/avtar.png'), // Replace with actual image URL
    rating: 5.0,
    timeAgo: '2 months ago',
    comment: 'Excellent vehicle, highly recommended!',
    likes: 850,
    dislikes: 23,
     isLiked: false,
    isDisliked: false,
  },
];

const UserReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  title: {
    fontSize: 18,
    fontFamily:appFonts.UrbanistBold,
    color:appColors.GreyScale[500],
    marginBottom: 24,
  },
  reviewCard: {
    marginBottom: 24,
    borderBottomWidth:1,
    borderColor: "#E0E0E0",
    borderRadius: 16,
    padding: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userMetaInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color:  appColors.GreyScale[400] ,
    marginBottom: 4,
  },
  timeAgo: {
    fontSize: 14,
    color: appColors.GreyScale[400],
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  rating: {
    color: appColors.GreyScale[400],
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
  comment: {
    fontSize: 16,
    color: appColors.GreyScale[400],
    lineHeight: 24,
    marginBottom: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  dislikeButton: {
    marginRight: 0,
  },
  actionCount: {
    color: '#8E8E93',
    fontSize: 14,
    marginLeft: 8,
  },
  shareButton: {
    padding: 4,
  },
   likedText: {
    color: '#007AFF', // iOS blue color
  },
  dislikedText: {
    color: '#FF3B30', // iOS red color
  },
});


 const handleLike = (reviewId: string) => {
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId
          ? { 
              ...review, 
              likes: review.isLiked ? review.likes - 1 : review.likes + 1,
              isLiked: !review.isLiked,
              isDisliked: false, // Remove dislike if exists
              dislikes: review.isDisliked ? review.dislikes - 1 : review.dislikes
            }
          : review
      )
    );
  };

  const handleDislike = (reviewId: string) => {
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId
          ? { 
              ...review, 
              dislikes: review.isDisliked ? review.dislikes - 1 : review.dislikes + 1,
              isDisliked: !review.isDisliked,
              isLiked: false, // Remove like if exists
              likes: review.isLiked ? review.likes - 1 : review.likes
            }
          : review
      )
    );
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User review</Text>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <View style={styles.userInfo}>
              <Image source={review.userImage} style={styles.userImage} />
              <View style={styles.userMetaInfo}>
                <Text style={styles.userName}>{review.userName}</Text>
                <Text style={styles.timeAgo}>{review.timeAgo}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
            </View>
          </View>
          
          <Text style={styles.comment}>{review.comment}</Text>
          
          <View style={styles.actionsContainer}>
            <View style={styles.actionGroup}>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => handleLike(review.id)}
              >
               <Ionicons 
                  name={review.isLiked ? "thumbs-up" : "thumbs-up-outline"} 
                  size={20} 
                  color={review.isLiked ? "#007AFF" : "#8E8E93"} 
                />
                <Text style={[
                  styles.actionCount,
                  review.isLiked && styles.likedText
                ]}>
                  {formatNumber(review.likes)}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.actionButton, styles.dislikeButton]} 
                onPress={() => handleDislike(review.id)}
              >
                <Ionicons 
                  name={review.isDisliked ? "thumbs-down" : "thumbs-down-outline"} 
                  size={20} 
                  color={review.isDisliked ? "#FF3B30" : "#8E8E93"} 
                />
                <Text style={[
                  styles.actionCount,
                  review.isDisliked && styles.dislikedText
                ]}>
                  {formatNumber(review.dislikes)}
                </Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-outline" size={20} color="#8E8E93" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default UserReviews;