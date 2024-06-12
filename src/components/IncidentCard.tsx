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

import { IncidentData } from "../model/incidence.interface";

const IncidentCard: React.FC<IncidentData> = ({
  title,
  incidentType,
  description,
  date,
  location,
}) => {
  return (
    <IonCard>
      <IonImg
        src={""}
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      ></IonImg>

      <IonCardHeader>
        <IonCardTitle> {title} </IonCardTitle>
        <IonCardSubtitle>
          Please stay in a safe place away from danger or scene at all tim e
          while reporting incidents
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{description}</IonCardContent>

      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-left">
            <IonChip color="medium">{incidentType}</IonChip>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonChip color="medium">{date}</IonChip>
          </IonCol>
        </IonRow>

        <div className="ion-text-center">
          <p>{location?.latitude || ""}</p>
        </div>
      </IonGrid>
    </IonCard>
  );
};

export default IncidentCard;
