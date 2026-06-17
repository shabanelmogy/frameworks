import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormDataModel {
  username: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-forms-storage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms-storage.component.html',
  styleUrl: './forms-storage.component.css'
})
export class FormsStorageComponent implements OnInit {
  // 1. Form Data Model
  // ⚛️ React equivalent: const [formData, setFormData] = useState({ ... })
  formData: FormDataModel = {
    username: '',
    email: '',
    role: 'Developer'
  };

  // 2. Saved Data State (from Local Storage)
  savedData: FormDataModel | null = null;

  // Load from Local Storage on init
  // ⚛️ React equivalent: useEffect(() => { ... }, [])
  ngOnInit() {
    const localData = localStorage.getItem('angular_user_profile');
    if (localData) {
      this.savedData = JSON.parse(localData);
    }
  }

  // 3. Submit Handler
  onSubmit(isValid: boolean | null) {
    if (isValid) {
      // Save to localStorage
      localStorage.setItem('angular_user_profile', JSON.stringify(this.formData));
      this.savedData = { ...this.formData };
      alert('Data successfully saved to Local Storage!');
    } else {
      alert('Please correct form validation errors first.');
    }
  }

  // 4. Clear Storage Handler
  clearStorage() {
    localStorage.removeItem('angular_user_profile');
    this.savedData = null;
  }
}
