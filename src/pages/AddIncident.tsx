import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonTextarea,
  IonText,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";

const AddIncident: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectOption, setSelectOption] = useState<string>("");
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState<string | null>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>REPORT INCIDENT</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonInput
            label="Incident"
            labelPlacement="floating"
            placeholder="Enter text"
            value={inputValue}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Select Category</IonLabel>
          <IonSelect
            value={selectOption}
            placeholder="Categories"
            // onIonChange={(e) => setSelectedOption(e.detail.value)}
          >
            <IonSelectOption value="Fighting">Fighting</IonSelectOption>
            <IonSelectOption value="Accident">Accident</IonSelectOption>
            <IonSelectOption value="Riot">Riot</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonTextarea
            label="Description"
            labelPlacement="floating"
            placeholder="Enter description"
          >
            <div slot="label">
              Comments <IonText color="danger">(Required)</IonText>
            </div>
          </IonTextarea>
        </IonItem>

        <IonItem>
          <IonInput label="Add Image" labelPlacement="floating"></IonInput>
        </IonItem>

        <IonButton expand="block">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddIncident;
