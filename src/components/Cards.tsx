import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const CardsControl: React.FC<{
}> = () => {
  return (
    <IonCard>
      <IonImg
        src={""}
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      ></IonImg>

      <IonCardHeader>
        <IonCardTitle> Student Rioting</IonCardTitle>
        <IonCardSubtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
        perferendis ut vel nihil fugiat, non placeat ducimus adipisci atque!
        Placeat ratione possimus ab fugit aspernatur, nostrum quos consectetur
        reprehenderit debitis?
      </IonCardContent>

      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-left">
            <IonChip color="medium">Date</IonChip>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonChip color="medium">Time</IonChip>
          </IonCol>
        </IonRow>

        <div className="ion-text-center">
          <p>Location</p>
        </div>
      </IonGrid>
    </IonCard>
  );
};

export default CardsControl;
