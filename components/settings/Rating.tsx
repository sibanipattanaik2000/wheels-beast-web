import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface RatingProps {
  overallRating: number;
  totalRatings: number;
  totalReviews: number;
  ratingDistribution: {
    [key: number]: number;  // 1-5 stars: percentage
  };
}

const Rating: React.FC<RatingProps> = ({
  overallRating,
  totalRatings,
  totalReviews,
  ratingDistribution,
}) => {

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(overallRating);
    const decimal = overallRating - fullStars;

    const getStarFillWidth = (decimal: number) => {
      if (decimal <= 0) return 0;
      if (decimal <= 0.3) return '25%';
      if (decimal <= 0.6) return '50%';
      if (decimal <= 0.9) return '75%';
      return '100%';
    };

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        // Full star
        stars.push(
          <AntDesign
            key={i}
            name="star"
            size={25}
            color="#FFC107"
            style={styles.star}
          />
        );
      } else if (i === fullStars + 1 && decimal > 0) {
        // Partial star
        stars.push(
          <View key={i} style={styles.starContainer}>
            <AntDesign
              name="star"
              size={25}
              color="rgba(255, 193, 7, 0.3)"
              style={[styles.star, styles.baseStar]}
            />
            <View style={[styles.partialStarContainer, { width: getStarFillWidth(decimal) }]}>
              <AntDesign
                name="star"
                size={25}
                color="#FFC107"
                style={[styles.star, styles.partialStar]}
              />
            </View>
          </View>
        );
      } else {
        // Empty star
        stars.push(
          <AntDesign
            key={i}
            name="star"
            size={25}
            color="rgba(255, 193, 7, 0.3)"
            style={styles.star}
          />
        );
      }
    }
    return stars;
  };

  const renderRatingBars = () => {
    return [5, 4, 3, 2, 1].map((star) => (
      <View key={star} style={styles.ratingBarContainer}>
        <Text style={[styles.ratingText, { color: appColors.GreyScale[400] }]}>
          {star} star
        </Text>
        <View style={styles.barBackground}>
          <View
            style={[
              styles.barFill,
              {
                width: `${ratingDistribution[star]}%`,
                backgroundColor: star === 5 ? "#FFC107" :appColors.GreyScale[400],
              },
            ]}
          />
        </View>
      </View>
    ));
  };

  return (
    <View style={[styles.container, { backgroundColor:'#0F172A' }]}>
      {/* Left side - Rating number and stars */}
      <View style={styles.leftSection}>
        <View style={styles.ratingHeader}>
          <Text style={[styles.ratingNumber, { color: "#FFFFFF" }]}>
            {overallRating.toFixed(1)}
          </Text>
          <Text style={[styles.maxRating, { color: "#FFFFFF" }]}>/5</Text>
        </View>
        <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
          <Text style={[styles.ratingSubtext, { color: appColors.GreyScale[400] }]}>
            {totalRatings} Rating •
          </Text>
          <Text style={[styles.ratingSubtext, { color: appColors.GreyScale[400] }]}>
            {totalReviews} Reviews
          </Text>
        </View>
        <View style={styles.starsContainer}>
          {renderStars()}
        </View>
      </View>

      {/* Right side - Rating bars */}
      <View style={styles.rightSection}>
        {renderRatingBars()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    width: "100%",
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1.5,
    marginLeft: 40
  },
  ratingHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ratingNumber: {
    fontSize: 48,
    fontFamily: appFonts.UrbanistBold,
  },
  maxRating: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    marginBottom: 12,
    marginLeft: 4,
  },
  ratingSubtext: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    marginBottom: 12,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  star: {
    marginRight: 4,
  },
  starContainer: {
    position: 'relative',
    width: 25,
    height: 25,
    marginRight: 4,
  },
  baseStar: {
    position: 'absolute',
    left: 0,
  },
  partialStarContainer: {
    position: 'absolute',
    left: 0,
    height: '100%',
    overflow: 'hidden',
  },
  partialStar: {
    position: 'absolute',
    left: 0,
  },
  ratingBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    width: 50,
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
  },
  barBackground: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
  },
  barFill: {
    height: '100%',
    borderRadius: 2,
  },
});

export default Rating;