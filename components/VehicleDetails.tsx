import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';
import Button from '@/components/Button';
import { Ionicons } from '@expo/vector-icons';
import DropDownComponent from '@/components/Dropdown';

interface VehicleDetailsProps {
  vehicle: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: any[];
    specs: {
      horsepower: number;
      torque: number;
      acceleration: number;
    };
    details: {
      make: string;
      model: string;
      exteriorColor: string;
      interiorColor: string;
      body: string;
      seats: number;
      vin: string;
    };
    features: {
      category: string;
      items: string[];
    }[];
    designImages: {
      category: string;
      image: any;
    }[];
  };
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>('vehicle-details');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const toggleFeature = (index: number) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Car Images Section */}
      <View style={{flexDirection:'row',gap:10,width:'100%'}}>
      <View style={styles.imageSection}>
        <View style={styles.mainImageContainer}>
          <Image
            source={vehicle.images[activeImage]}
            style={styles.mainImage}
            contentFit="cover"
          />
          <View style={styles.imageNavigation}>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>360</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.thumbnailsContainer}>
          {vehicle.images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.thumbnailButton,
                activeImage === index && styles.activeThumbnail,
              ]}
              onPress={() => setActiveImage(index)}
            >
              <Image source={image} style={styles.thumbnailImage} contentFit="cover" />
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.moreImagesButton}>
            <Text style={styles.moreImagesText}>+3</Text>
            <Text style={styles.moreImagesSubtext}>Images</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Car Details Section */}
        <View style={styles.detailsSection}>
        <View style={styles.header}>
          <View>
            <Text style={styles.carTitle}>{vehicle.name}</Text>
            <Text style={styles.carDescription}>{vehicle.description}</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="heart-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="share-social-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Specs Section */}
        <View style={styles.specsContainer}>
          <View style={styles.specItem}>
            <Ionicons name="speedometer-outline" size={24} color="#000" />
            <Text style={styles.specValue}>{vehicle.specs.horsepower} <Text style={styles.specUnit}>hp</Text></Text>
            <Text style={styles.specLabel}>Horsepower</Text>
          </View>
          <View style={styles.specItem}>
            <Ionicons name="cog-outline" size={24} color="#000" />
            <Text style={styles.specValue}>{vehicle.specs.torque} <Text style={styles.specUnit}>lb-ft</Text></Text>
            <Text style={styles.specLabel}>Torque</Text>
          </View>
          <View style={styles.specItem}>
            <Ionicons name="timer-outline" size={24} color="#000" />
            <Text style={styles.specValue}>{vehicle.specs.acceleration} <Text style={styles.specUnit}>sec</Text></Text>
            <Text style={styles.specLabel}>0-60 mph</Text>
          </View>
        </View>

        {/* Test Drive Button */}
        <Button
          title="Free test drive"
          variant="filled"
          fontWeight="UrbanistBold"
          color={appColors.AdditionalColor.white}
          style={{ backgroundColor: appColors.main.Primary, marginVertical: 20 }}
          width="100%"
        />

        {/* Price and Buy Section */}
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.priceLabel}>Price (Cash)</Text>
            <Text style={styles.priceValue}>${vehicle.price.toLocaleString()}</Text>
          </View>
          <Button
            title="Buy"
            variant="filled"
            fontWeight="UrbanistBold"
            color={appColors.AdditionalColor.white}
            style={{ backgroundColor: appColors.main.Primary }}
            width="30%"
          />
        </View>
        </View>

        </View>

        {/* Collapsible Details Sections */}
        <View style={styles.collapsibleSections}>
          {/* Vehicle Details */}
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('vehicle-details')}
          >
            <Text style={styles.sectionTitle}>Vehicle Details</Text>
            <Ionicons 
              name={expandedSection === 'vehicle-details' ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#4F46E5" 
            />
          </TouchableOpacity>
          
          {expandedSection === 'vehicle-details' && (
            <View style={styles.sectionContent}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Make</Text>
                <View style={styles.detailValueContainer}>
                  <Image 
                    source={require('@/assets/images/carlist/Audi.png')} 
                    style={styles.brandIcon} 
                  />
                  <Text style={styles.detailValue}>{vehicle.details.make}</Text>
                </View>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Model</Text>
                <Text style={styles.detailValue}>{vehicle.details.model}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Exterior color</Text>
                <View style={styles.colorContainer}>
                  <View style={[styles.colorDot, { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5E7EB' }]} />
                  <Text style={styles.detailValue}>{vehicle.details.exteriorColor}</Text>
                </View>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Interior color</Text>
                <Text style={styles.detailValue}>{vehicle.details.interiorColor}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Body</Text>
                <Text style={styles.detailValue}>{vehicle.details.body}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Seats</Text>
                <Text style={styles.detailValue}>{vehicle.details.seats}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>VIN</Text>
                <Text style={styles.detailValue}>{vehicle.details.vin}</Text>
              </View>
            </View>
          )}

          {/* Vehicle Conditions Section */}
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('vehicle-conditions')}
          >
            <Text style={styles.sectionTitle}>Vehicle Conditions</Text>
            <Ionicons 
              name={expandedSection === 'vehicle-conditions' ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#4F46E5" 
            />
          </TouchableOpacity>
          
          {/* Features Section */}
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('features')}
          >
            <Text style={styles.sectionTitle}>Features</Text>
            <Ionicons 
              name={expandedSection === 'features' ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#4F46E5" 
            />
          </TouchableOpacity>
          
          {expandedSection === 'features' && (
            <View style={styles.sectionContent}>
              <View style={styles.featureCardsContainer}>
                {vehicle.features.map((featureCategory, index) => (
                  <View key={index} style={styles.featureCard}>
                    <TouchableOpacity 
                      style={styles.featureHeader}
                      onPress={() => toggleFeature(index)}
                    >
                      <View style={styles.featureHeaderLeft}>
                        <View style={styles.featureIconContainer}>
                          <Ionicons name="car-sport-outline" size={24} color="#4F46E5" />
                        </View>
                        <Text style={styles.featureCategoryTitle}>{featureCategory.category}</Text>
                      </View>
                      <Ionicons 
                        name={expandedFeature === index ? 'chevron-up' : 'chevron-down'} 
                        size={20} 
                        color="#4F46E5" 
                      />
                    </TouchableOpacity>
                    
                    {expandedFeature === index && (
                      <View style={styles.featureItemsContainer}>
                        {featureCategory.items.map((item, itemIndex) => (
                          <View key={itemIndex} style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#4F46E5" />
                            <Text style={styles.featureItemText}>{item}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          )}
          
          {/* Design Section */}
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('design')}
          >
            <Text style={styles.sectionTitle}>Design</Text>
            <Ionicons 
              name={expandedSection === 'design' ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#4F46E5" 
            />
          </TouchableOpacity>
          
          {expandedSection === 'design' && (
            <View style={styles.sectionContent}>
              <View style={styles.designContainer}>
                <View style={styles.designCategoryContainer}>
                  <DropDownComponent
                    label="Select Design Category"
                    options={vehicle.designImages.map(item => item.category)}
                    onSelect={(value) => console.log("Selected design category:", value)}
                  />
                </View>
                
                <View style={styles.designImagesGrid}>
                  {vehicle.designImages.map((designItem, index) => (
                    <View key={index} style={styles.designImageContainer}>
                      <Image
                        source={designItem.image}
                        style={styles.designImage}
                        contentFit="cover"
                      />
                      <Text style={styles.designImageCaption}>{designItem.category}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}
          
          {/* Price Map Section */}
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('price-map')}
          >
            <Text style={styles.sectionTitle}>Price Map</Text>
            <Ionicons 
              name={expandedSection === 'price-map' ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#4F46E5" 
            />
          </TouchableOpacity>
          
          {/* Financing Section */}
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('financing')}
          >
            <Text style={styles.sectionTitle}>Financing</Text>
            <Ionicons 
              name={expandedSection === 'financing' ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#4F46E5" 
            />
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imageSection: {
    alignItems:'center',
    borderWidth:2,
    width:'30%'

  },
  mainImageContainer: {
    width: '100%',
    height: 360,
    position: 'relative',
    borderRadius:10,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    borderRadius:10
  },
  imageNavigation: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  navButtonText: {
    color: '#fff',
    fontFamily: appFonts.UrbanistSemiBold,
  },
  thumbnailsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 10,
    padding:20
  },
  thumbnailButton: {
    width: 128,
    height: 124,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeThumbnail: {
    borderColor: appColors.main.Primary,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  moreImagesButton: {
    width: 80,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreImagesText: {
    color: '#fff',
    fontFamily: appFonts.UrbanistBold,
    fontSize: 16,
  },
  moreImagesSubtext: {
    color: '#fff',
    fontFamily: appFonts.UrbanistRegular,
    fontSize: 12,
  },
  detailsSection: {
    padding: 25,
    borderWidth:2,
    width:'40%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  carTitle: {
    fontSize: 28,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 8,
  },
  carDescription: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[600],
    lineHeight: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
  },
  specsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  specItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
  },
  specValue: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginVertical: 5,
  },
  specUnit: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
  },
  specLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  priceLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
  },
  priceValue: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  collapsibleSections: {
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[200],
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  sectionContent: {
    paddingVertical: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  detailLabel: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
  },
  detailValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brandIcon: {
    width: 24,
    height: 24,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  featureCardsContainer: {
    gap: 16,
  },
  featureCard: {
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 12,
    overflow: 'hidden',
  },
  featureHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: appColors.GreyScale[50],
  },
  featureHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(79, 70, 229, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureCategoryTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  featureItemsContainer: {
    padding: 16,
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureItemText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[700],
  },
  designContainer: {
    gap: 20,
  },
  designCategoryContainer: {
    marginBottom: 16,
  },
  designImagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  designImageContainer: {
    width: '48%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  designImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  designImageCaption: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[700],
    marginTop: 8,
  },
});

export default VehicleDetails; 