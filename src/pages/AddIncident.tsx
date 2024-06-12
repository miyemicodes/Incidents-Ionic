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
  IonRow,
  IonSpinner,
  useIonRouter
} from "@ionic/react";
import React, { useState } from "react";
import { IncidentData } from "../model/incidence.interface";
import { useStoreContext } from "../store/Store-context";


interface AddIncidentProps {
  // onSubmit: (data: IncidentData) => void;
}


const AddIncident: React.FC<AddIncidentProps> = (/* remove {onSubmit} */) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectOption, setSelectOption] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { mainState, setMainState } = useStoreContext();
  const router = useIonRouter();

  const getDateTime = () => {
    const now = new Date();
    setCurrentDateTime(now.toLocaleString());
  };
  const getLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  };

  // const handleFileChange = (e) => {  //error
  //   const input = e.target.files;
  //   if (input.files && input.files.length > 0) {
  //     setSelectedFile(input.files[0]);
  //   }
  // };

  const handleSubmit = () => {
    const incidentData: IncidentData = {
      id: new Date().getTime(),
      title: inputValue,
      incidentType: selectOption,
      description: textArea,
      image: selectedFile,
      location,
      date: currentDateTime,
    };
    // onSubmit(incidentData);
    setMainState(previousSavedData => [...previousSavedData, incidentData]);
    router.push('/home');
  };

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
            placeholder="Enter Incident"
            value={inputValue}
            onIonChange={(e) => setInputValue(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Select Category</IonLabel>
          <IonSelect
            value={selectOption}
            placeholder="Categories"
            onIonChange={(e) => setSelectOption(e.detail.value)}
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
            value={textArea}
            onIonChange={(e) => setTextArea(e.detail.value!)}
          >
            <div slot="label">
              Comments <IonText color="danger">(Required)</IonText>
            </div>
          </IonTextarea>
        </IonItem>

        <IonItem>
          <IonRow>
            <IonLabel className="ion-padding">Upload Image</IonLabel>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              className="ion-text-left"
              // onChange={handleFileChange} //why is there an error
            />
          </IonRow>
        </IonItem>

        <IonItem>
          {currentDateTime ? (
            <IonText>{currentDateTime}</IonText>
          ) : (
            <IonButton expand="block" onClick={getDateTime}>
              Get Current Date and Time
            </IonButton>
          )}
        </IonItem>

        <IonItem>
          {loading ? (
            <IonSpinner name="crescent" />
          ) : location ? (
            <>
              <p>Latitude: {location.latitude}</p>
              <p>Longitude: {location.longitude}</p>
            </>
          ) : (
            <IonButton expand="block" onClick={getLocation}>
              Get Current Location
            </IonButton>
          )}
        </IonItem>

        <IonButton expand="block" onClick={handleSubmit}>
          Submit
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddIncident;
